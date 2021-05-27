const app = new Vue(
      {
            el: "#root",
            data: {
                  emailList: []
            },
            mounted: function () {
                  for (let i=0; i<10; i++) {
                        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                              .then((response) => {
                                    let result = response.data;
                                    this.emailList.push(result.response);
                              })
                  }
            }
      }
);