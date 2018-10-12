<template>
  <div class="editMember container">
   <h1>Edit member's info</h1>

   <form v-on:submit="editMember">
     <!-- About -->
     <div class="card card-body bg-light">
        <h3>About</h3>
     <div class="form-group">
    
     <label for="nickname"></label>
     <input type="text" class="form-control" placeholder="Nickname.." v-model="member.nickname" required>
     
    
     <label for="first_name"></label> 
     <input type="text" class="form-control" placeholder="First name.." v-model="member.first_name" required>
    

     <label for="last_name"></label>
     <input type="text" class="form-control" placeholder="Last name.." v-model="member.last_name">
     </div>
      </div>

  <!-- Contact -->
  <div class="card card-body bg-light">
        <h3>Contact</h3>
     <div class="form-group">
    
     <label for="email"></label>
     <input type="email" class="form-control" placeholder="Email.." v-model="member.email" required>
     
    
     <label for="first_name"></label>
     <input type="text" class="form-control" placeholder="Skype.." v-model="member.skype">
    

     <label for="last_name"></label>
     <input type="tel" class="form-control" placeholder="Phone.." v-model="member.phone">
     </div>
      </div>

  <!-- Additional Information -->
  <div class="card card-body bg-light">
        <h3>Additional Information</h3>
     <div class="form-group">
    
     <label for="country"></label>
     <input type="text" class="form-control" placeholder="Where are you from.." v-model="member.country">
     
  
     </div>
      </div>
     <!-- About: first_name, last_name, nickname
     Contact: skype,phone,email
     Additional: country -->
  
<button type="submit" class="btn btn-primary">Save</button>
   </form>
  </div>
   
</template> 

<script>
export default {
  name: 'editMember',
  data() {
    return {
      member: {}
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
    editMember(e) {
      e.preventDefault();
      let editedMember = {
        first_name: this.member.first_name,
        last_name: this.member.last_name,
        nickname: this.member.nickname,
        phone: this.member.phone,
        email: this.member.email,
        skype: this.member.skype,
        country: this.member.country
      };

      this.$http
        .put(
          'http://phpslimapiapp/api/member/update/' + this.$route.params.id,
          editedMember
        )
        .then(function(res) {
          // redirect after adding
          this.$router.push({
            path: '/members',
            query: {
              alert: '' + editedMember.nickname + ' ' + 'got edited'
            },
            component: true
          });
        });
    }
  },
  created: function() {
    this.fetchMember(this.$route.params.id);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  max-width: 850px;
  margin: 0 auto;
}
.card {
  margin: 10px auto;
}
</style>
