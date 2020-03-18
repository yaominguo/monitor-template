<template>
  <m-grid
    :template="[
      'title title title',
      'box1 . box4',
      'box1 . box3',
      'box2 box2 box3',
    ]"
    columns="1fr 2fr 1fr"
    rows="4rem 1fr 1fr 1fr"
    gap="0.8rem"
    :bgImg="require('@/assets/images/stars-bg.png')"
    style="paddingTop: 0"
  >
    <m-title area="title" hideDate hideTime :bgImg="require('@/assets/images/title-bg.png')">测试专题</m-title>
    <m-card area="box1" title="题目">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia fugit dicta explicabo blanditiis dolorum ratione aliquid, consequuntur facere ex saepe consectetur! At, accusamus fuga placeat vero soluta facilis odio esse.
    </m-card>
    <m-card area="box2">
      box2
    </m-card>
    <m-card area="box3">
      abc
    </m-card>
    <m-card area="box4">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint pariatur quaerat hic consectetur qui omnis, exercitationem quo, molestias magnam aperiam asperiores non modi officiis quod delectus temporibus iusto necessitatibus quam.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus animi fugiat officiis facere inventore quisquam assumenda aliquid, nulla quam, voluptate possimus. Cum ea possimus mollitia animi nemo at! Totam, porro?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus deserunt reiciendis iure ipsum asperiores dicta nostrum veritatis impedit voluptatum ducimus quia, eius incidunt sequi blanditiis, explicabo fuga error perspiciatis a?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint totam minima et commodi, doloremque veritatis ex, reiciendis nesciunt quaerat eligendi ullam cupiditate deleniti quisquam. Sapiente error commodi iusto accusamus minima.
    </m-card>
  </m-grid>
</template>

<script>
export default {
  name: 'Main',
}
</script>
