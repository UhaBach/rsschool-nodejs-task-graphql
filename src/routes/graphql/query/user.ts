import { GraphQLList } from "graphql";
import { user } from "../types/user.js";
import { PrismaClient } from "@prisma/client";
import { UUIDType } from "../types/uuid.js";

export const queriesUser = {
    users: {
        type: new GraphQLList(user),
        resolve: async (_obj, _args, context: PrismaClient) => { 
            return await context.user.findMany({
                include: {
                posts:true,
                userSubscribedTo: true,
                subscribedToUser: true,
                profile: {
                    include: {
                        memberType: true
                    }
                }
            }});
        }
    },
    user: {
        type: user,
        args: {
            id: {
                type: UUIDType
            }
        },
        resolve: async (_obj, args, context: PrismaClient) => { 
            const received = await context.user.findUnique({
                where: {
                    id: args.id
                },
                include: {
                    posts:true,
                    userSubscribedTo: {
                        include: {
                            author: {
                                include: {
                                    subscribedToUser: {
                                        include:{
                                            subscriber: true
                                        }
                                    }
                                }
                            }
                        }
                    },
                    subscribedToUser: {
                        include: {
                            subscriber: {
                                include: {
                                    userSubscribedTo: {
                                        include:{
                                            author:true
                                        }
                                    }
                                }
                            }
                        }
                    },
                    profile: {
                        include: {
                            memberType: true
                        }
                    }
                }
            });
            if(received === null) return null;
            const subscribers = received?.subscribedToUser.map(s => s.subscriber);
            const authors = received?.userSubscribedTo.map(a => a.author);
            const response = {
                id: received?.id,
                balance: received?.balance,
                name: received?.name,
                posts: received?.posts,
                profile: received?.profile,
                userSubscribedTo: authors?.map(a => {
                    return {
                        id: a.id,
                        balance: a.balance,
                        name: a.name,
                        subscribedToUser: a.subscribedToUser.map(s => s.subscriber)
                    }
                }),
                subscribedToUser: subscribers?.map(s => {
                    return {
                        id: s.id,
                        balance: s.balance,
                        name: s.name,
                        userSubscribedTo: s.userSubscribedTo.map(s => s.author)
                    }
                })
            }
            return response;
        }
    }
}