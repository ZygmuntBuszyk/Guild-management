<template>
  <div class="addMember container">
   <h1>Add member</h1>

   <form v-on:submit="addMember">
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
  
<button type="submit" class="btn btn-primary">Add member</button>
   </form>
  </div>
   
</template> 

<script>
export default {
  name: 'addMember',
  data() {
    return {
      member: {}
    };
  },
  methods: {
    addMember(e) {
      e.preventDefault();
      let newMember = {
        first_name: this.member.first_name,
        last_name: this.member.last_name,
        nickname: this.member.nickname,
        phone: this.member.phone,
        email: this.member.email,
        skype: this.member.skype,
        country: this.member.country
      };
      console.log(newMember);
      this.$http
        .post('http://phpslimapiapp/api/member/add', newMember)
        .then(function(res) {
          // redirect after adding
          this.$router.push({
            path: '/members',
            query: {
              alert: '' + newMember.nickname + ' ' + 'was added to your guild'
            },
            component: true
          });
        });
    }
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
