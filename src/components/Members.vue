
<template>
  <div class="members container">
     <Alert v-if="alert" v-bind:message="alert" /> 
     
 <!-- class="alert alert-success   alert-dismissible fade show" -->
  <h1 class="page-header">Members</h1>
  <input type="text" class="form-control" placeholder="Search.." v-model="filterInput">
  <table class="table table-stripped">
    <thead>
      <td>Nickname</td>
      <td>First Name</td>
      <td>Last Name </td>
      <th>Actions</th>
    </thead>
    <tbody>
      <tr v-for="member in filterBy(members, filterInput)">
        <td>{{member.nickname}}</td>
        <td>{{member.first_name}}</td>
        <td>{{member.last_name}}</td>
         <td><router-link class="btn btn-success" v-bind:to="'/member/'+member.id">View</router-link></td>
         </tr>
    </tbody>
  </table>

  </div>
   
</template> 

<script>
import Alert from './Alert.vue';
export default {
  name: 'members',
  // props: {
  //   msg: String
  // }
  data() {
    members: [];
    return {
      members: [],
      alert: '',
      filterInput: ''
    };
  },
  methods: {
    fetchMembers() {
      this.$http
        .get('http://phpslimapiapp/api/members')
        .then(function(response) {
          this.members = response.body;
        });
    },
    filterBy(list, value) {
      // value = value.charAt(0).toUpperCase() + value.slice(1); naprawia wyszukwanie duzych liter/ szuka tylko po dużych
      return list.filter(function(member) {
        return member.nickname.indexOf(value) > -1;
      });
    }
  },
  created: function() {
    this.fetchMembers();

    if (this.$route.query.alert) {
      // console.log(this.$route.query.alert);
      this.alert = this.$route.query.alert;
    }
  },
  updated: function() {
    this.fetchMembers();
  },
  components: {
    Alert
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
