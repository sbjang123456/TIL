
<script>
  export let data
</script>

<h1> about page {data.title}</h1>

<form action="/api1" method="post">
  <input type="text" name="meail" />
  <input type="text" name="password" />
  <button>로그인</button>
</form>