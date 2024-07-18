const user = [
    {
        path:"/user",
        component: () => import("../resources/views/layouts/user.vue"),
        children: [
            {
                path: "",
                name: "user-home",
                component: () => import("../resources/views/pages/user/home.vue")
            },
            {
                path: "profile",
                name: "user-profile",
                component: () => import("../resources/views/pages/user/portfolio.vue")
            }
        ]
    }
];
export default user;
