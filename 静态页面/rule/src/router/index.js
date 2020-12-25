import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "rule",
    component: () =>
    import( "../views/Rule.vue")
  },
  {
    path: "/invite",
    name: "invite",
    component: () =>
      import( "../views/invite.vue")
  },
  {
    path: "/answer",
    name: "answer",
    component: () =>
      import( "../views/answer.vue")
  },
  {
    path: "/ruledetail",
    name: "ruledetail",
    component: () =>
      import( "../views/RuleDetail.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
