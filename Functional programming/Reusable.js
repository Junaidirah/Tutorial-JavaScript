const mahasiswa = [
  {
    name: "aqif",
    score: 60,
  },
  {
    name: "juna",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Ban",
    score: 75,
  },
];

const eligibleForScholarshipmahasiswa = mahasiswa.filter(
  (mahasiswa) => mahasiswa.score > 85
);

console.log(eligibleForScholarshipmahasiswa);
