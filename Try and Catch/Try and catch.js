try {
  console.log("awal Try");
  errorCode();
  console.log("Akhir Try");
} catch (error) {
  console.log(error.name);
  console.log(error.massage);
  console.log(error.stack);
} finally {
  console.log("tau ga sih");
}
