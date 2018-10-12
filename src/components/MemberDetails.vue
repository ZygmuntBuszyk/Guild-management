<template>
  <div class="details container">
    <h1 class="pb-2 mt-4 mb-4 border-bottom">{{member.nickname}}
    
     <span class="right"><button class="btn btn-danger" v-on:click="deleteMember(member.id, member.nickname)">Delete</button></span> 
     <span class="right"> <router-link class="btn btn-primary" v-bind:to ="'/member/edit/'+member.id"> Edit</router-link></span></h1>
   
    <ul>
      <li class="list-group-item"><strong>First Name: </strong> {{member.first_name}}</li>
       <li class="list-group-item"><strong>Last Name: </strong>{{member.last_name}}</li>
        <li class="list-group-item"><strong>Email: </strong>{{member.email}}</li>
         <li class="list-group-item"><strong>Phone: </strong>{{member.phone}}</li>
          <li class="list-group-item"><strong>Skype: </strong>{{member.skype}}</li>
           <li class="list-group-item"><strong>Country: </strong>{{member.country}}</li>
    </ul>
    <router-link to = "/members" > <button class="btn btn-success"> < </button> </router-link>
  </div>
   
</template> 

<script>
export default {
  name: 'details',
  data() {
    return {
      member: ''
    };
  },
  methods: {
    fetchMember(id) {
      this.$http
        .get('http://phpslimapiapp/api/member/' + id)
        .then(function(response) {
          this.member = response.body;
        });
    },
    deleteMember(id, name) {
      this.$http
        .delete('http://phpslimapiapp/api/member/delete/' + id)
        .then(function(response) {
          this.$router.push({
            path: '/members',
            query: { alert: name + ' ' + 'got removed from the guild' }
          });
        });
    }
  },
  // calling when page loads
  created: function() {
    this.fetchMember(this.$route.params.id);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  color: white;
  font-weight: bold;
}
.right {
  float: right;
  margin-left: 5px;
}
@media (max-width: 321px) {
  .right {
    float: none;
    display: inline-block;
  }
  .list-group-item strong {
    display: none;
  }
  ul {
    padding: 0;
  }
}
</style>
