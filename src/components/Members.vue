<template>
  <div class="members container">
    
<h1 class="page-header">Members</h1>

  <table class="table table-stripped">
    <thead>
      <td>Nickname</td>
      <td>First Name</td>
      <td>Last Name </td>
      <th></th>
    </thead>
    <tbody>
      <tr v-for="member in members">
        <td>{{member.nickname}}</td>
        <td>{{member.first_name}}</td>
        <td>{{member.last_name}}</td>
         <td></td>
         </tr>
    </tbody>
  </table>

  </div>
   
</template> 

<script>
export default {
  name: 'members',
  // props: {
  //   msg: String
  // }
  data() {
    members: [];
    return {
      members: []
    };
  },
  methods: {
    fetchMembers() {
      this.$http
        .get('http://phpslimapiapp/api/members')
        .then(function(response) {
          this.members = response.body;
        });
    }
  },
  created: function() {
    this.fetchMembers();
  },
  updated: function() {
    this.fetchMembers();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
