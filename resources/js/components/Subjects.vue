<template>
    <div class="container">
        <h1>Jamb UTME Subjects</h1>
        <p>Select a subject</p>

        <div>
          <div>
            <b-card-group deck>
              <b-card bg-variant="primary" text-variant="white" header="JAMB" class="text-center">
                <router-link to="/chemistry" class="text">
                <b-card-text>Chemistry</b-card-text>
                </router-link>
              </b-card>
            

              <b-card bg-variant="secondary" text-variant="white" header="JAMB" to="/english" class="text-center">
                <router-link to="/english" class="text">
                <b-card-text>English</b-card-text>
                </router-link>
              </b-card>

              <b-card bg-variant="success" text-variant="white" header="JAMB" to="/math" class="text-center">
                <router-link to="/math" class="text">
                <b-card-text>Mathematics</b-card-text>
                </router-link>
              </b-card>
            </b-card-group>
          </div>
          <div class="mt-3">
            <b-card-group deck>
              <b-card bg-variant="info" text-variant="white" header="JAMB" class="text-center">
                <router-link to="/physics" class="text">
                <b-card-text>Physics</b-card-text>
                </router-link>
              </b-card>

              <b-card bg-variant="warning" text-variant="white" header="JAMB" class="text-center">
                <router-link to="/biology" class="text">
                  <b-card-text>Biology</b-card-text>
                </router-link>
              </b-card>

              <b-card bg-variant="danger" text-variant="white" header="JAMB" class="text-center">
                <router-link to="/commerce" class="text">
                  <b-card-text>Commerce</b-card-text>
                </router-link>
              </b-card>
            </b-card-group>
          </div>
          <div class="mt-3">
            <b-card-group deck>
              <b-card id="government" header="JAMB" class="text-center">
                <router-link to="/government" class="darkText">
                  <b-card-text>Government</b-card-text>
                </router-link>
              </b-card>

              <b-card bg-variant="dark" header="JAMB" text-variant="white" class="text-center">
                <router-link to="/literature" class="text">
                  <b-card-text>Literature</b-card-text>
                </router-link>
              </b-card>

              <b-card id="economics" header="JAMB" class="text-center">
                <router-link to="/economics" class="darkText">
                  <b-card-text>Economics</b-card-text>
                </router-link>
              </b-card>
            </b-card-group>
          </div>
        </div>

    </div>
</template>


<script>
export default {
    name: 'subjects'
}
</script>

<style lang="scss" scoped>
    h1, p { font-size: 2rem;}
    .text {
      color: white;
      text-decoration: none;
    }

    #economics {
      background-color: pink;
    }

    #government {
      background-color: chartreuse;
    }

    .darkText{
      color: #333;
      text-decoration: none;
    }

    .text-center {
      transform: scale(1);      //translate(0px, 0px);
      transition: transform 0.3s;
    }

    .text-center:hover {
      transform: scale(1.04);       //translate(0px, -7px);
    }
</style>



