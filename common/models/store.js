'use strict';

module.exports = function(Store) {
    Store.beforeRemote('create',function(ctx,instance,cb){
        console.log(ctx.args.data);
        console.log(ctx.req.accessToken.userId);
        ctx.args.data.owner = ctx.req.accessToken.userId;
        ctx.args.data.appUsersId = ctx.req.accessToken.userId;
        cb();
    });
};
