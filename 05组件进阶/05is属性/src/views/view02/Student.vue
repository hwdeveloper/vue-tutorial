<template>
  <div>
    <h3>学生列表</h3>
    <table>
      <thead>
        <th>学号</th>
        <th>姓名</th>
        <th>性别</th>
        <th>手机号</th>
      </thead>
      <tbody>
        <tr v-for="item of users" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.sex }}</td>
          <td>{{ item.phone }}</td>
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
        { id: "X000001", name: "小飞", sex: "男", phone: 15500001111 },
        { id: "X000002", name: "小茗", sex: "女", phone: 15500002222 },
      ],
    };
  },
};
</script>
