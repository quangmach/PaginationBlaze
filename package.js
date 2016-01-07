Package.describe({
    "name": "kurounin:pagination-blaze",
    "summary": "Blaze paginator template for kurounin:pagination package.",
    "version": "1.0.1",
    "git": "https://github.com/Kurounin/PaginationBlaze.git"
});

Package.onUse(function (api) {
    api.versionsFrom("METEOR@1.2.1");
    api.use([
        "meteor-base",
        "underscore",
        "kurounin:pagination@1.0.7"
    ]);

    api.use("iron:router@1.0.0", ["client", "server"], { weak: true });
    api.use([
        "reactive-var",
        "reactive-dict"
    ], "client");

    api.use([
        "templating",
        "blaze"
    ], "client");

    api.addFiles([
        "client/template.html",
        "client/template.js"
    ], "client");
});
