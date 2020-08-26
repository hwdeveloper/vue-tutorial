<template>
  <div>
    <h3>教师列表</h3>
    <table>
      <thead>
        <th>工号</th>
        <th>姓名</th>
        <th>性别</th>
        <th>授课科目</th>
      </thead>
      <tbody>
        <tr v-for="item of users" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.sex }}</td>
          <td>{{ item.subject }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [
        { id: "T000001", name: "李老师", sex: "男", subject: "web 大前端" },
        { id: "T000002", name: "唐老师", sex: "女", subject: "UI 设计" },
      ],
    };
  },
};
</script>
