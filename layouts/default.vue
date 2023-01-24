<template>
<div>
  <nav ref="navi" class="nav">
  <div class="brand">
    <div class="logo">
      <span class="material-symbols-outlined">timer</span>
    </div>
    <h1>Timebox</h1> 
  </div>
</nav>
  <Nuxt />
</div>

</template>
<style scoped>
.nav{
  display: flex;
  justify-content: center;
  padding:10px; 
 box-shadow: -2rem 0 3rem -2rem #000; 
  background:#0000005e; 
}
.brand{
  display:flex; 
  gap:.5rem; 
  align-items: center;

}

.brand h1{
    font-family: 'Arizonia', cursive;
  font-size: 45px;
  margin:0; 
  font-weight: 100;
}

.brand span{
font-size: 50px;
}


</style>