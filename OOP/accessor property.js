class Mhs {
  constructor(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
  }

  get fulldata() {
    return `${this.nama} ${this.nim} ${this.jurusan}`;
  }
  set fulldata(fulldata) {
    const [nama, nim, jurusan] = fulldata.split("");
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
  }
}

const mhs = new Mhs(`Junaidi`, 1104220015, `Teknik`);
console.log(mhs);
console.log(mhs.fulldata);

Mhs.fulldata = `Rahmat , 1104220015, Akunstasi`;
console.log(Mhs);
console.log(Mhs.fulldata);

class Mail {
  constructor(sender, receiver, subject, body) {
    this.sender = sender;
    this.receiver = receiver;
    this.subject = subject;
    this.body = body;
  }

  // Methods
  send() {
    console.log(`Sending mail from ${this.sender} to ${this.receiver}`);
  }

  sendLater(delay) {
    console.log(`Sending after ${delay} ms`);

    setTimeout(() => {
      this.send();
    }, delay);
  }

  saveAsDraft() {
    console.log("Saving mail as draft");
  }
}
