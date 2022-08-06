var nama = "michael";
var peran = "Tabib"
if (nama == "") {
    console.log("nama harus di isi")
} else {
    if (peran == "") {
        console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!")
    } else if (peran === "Ksatria") {
        console.log("Selamat datang di Dunia Proxytia, " + nama)
        console.log("Halo " + peran + " " + nama + ", kamu dapat menyerang dengan senjatamu!")
    } else if (peran === "Tabib") {
        console.log("Selamat datang di dunia Proxitia, " + nama)
        console.log("Halo " + peran + " " + nama + ", kamu dapat membantu temanmu yang terluka.")
    } else if (peran === "Penyihir") {
        console.log("Selamat datang di dunia Proxitia, " + nama)
        console.log("Halo " + peran + " " + nama + ", ciptakan keajaiban yang membantu kemenangan.")
    }
}
