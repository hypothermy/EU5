const days = [
  { title: "Gün 1: Kurulum ve Arayüz", tasks: `- UE5 indir ve kur.\n- 3rd Person Template projesi oluştur.\n- Arayüz keşfet.\n` },
  { title: "Gün 2: Actor, Pawn, Character", tasks: "- Farkları araştır.\n- Basit bir Actor Blueprint oluştur.\n- Küp sahneye yerleştir." },
  { title: "Gün 3: Level Tasarımı", tasks: "- Geometrik objelerle level sahnesi oluştur.\n- Yer, duvar ve engel yap." },
  { title: "Gün 4: Işık ve Kamera", tasks: "- Point/Directional/Skylight kullan.\n- Kamera aktörü yerleştir." },
  { title: "Gün 5: Karakter Hareketleri", tasks: "- Event Graph ile Input analizi.\n- Yürüme ve zıplama hareketleri." },
  { title: "Gün 6: Materyal ve Kaplama", tasks: "- Renk, metalik, roughness parametreleri.\n- Objeye materyal uygula." },
  { title: "Gün 7: Mini Proje 1", tasks: "- Küçük bir parkur sahnesi.\n- Karakterin hareketlerini test et." },

  { title: "Gün 8: Event, Variable, Function", tasks: "- Blueprint'te Event, Variable, Function kavramlarını öğren.\n- Basit hesaplama veya sayaç sistemi yap." },
  { title: "Gün 9: UI (UMG) Giriş", tasks: "- Sağlık barı gibi basit bir kullanıcı arayüzü oluştur.\n- Blueprint ile bağla." },
  { title: "Gün 10: Trigger Box ve Etkileşim", tasks: "- Trigger alanı oluştur.\n- Karakter alana girince bir mesaj veya animasyon başlat." },
  { title: "Gün 11: Ses Entegrasyonu", tasks: "- Arka plan müziği ve efekt sesi ekle.\n- UI veya Trigger ile tetikle." },
  { title: "Gün 12: AI Temelleri", tasks: "- Basit bir yapay zeka hareketi (patrol sistemi) oluştur.\n- Nav Mesh kullan." },
  { title: "Gün 13: Collectable Sistemleri", tasks: "- Toplanabilir objeler oluştur.\n- UI'da sayılarını göster." },
  { title: "Gün 14: Mini Proje 2", tasks: "- V1 prototip sahne: Karakter, düşman AI, toplanabilirler, sağlık, UI" },

  { title: "Gün 15: Checkpoint Sistemi", tasks: "- Oyuncu belirli alana ulaşınca kayıt sistemi." },
  { title: "Gün 16: Skor Sistemi", tasks: "- Toplanan objelere göre skor artır." },
  { title: "Gün 17: Kaybetme/Kazanma Şartları", tasks: "- Sağlık sıfır olunca kaybet.\n- Belirli skorla kazan." },
  { title: "Gün 18: Menü Ekranı", tasks: "- Ana menü ve oyun sonu ekranı oluştur." },
  { title: "Gün 19: Level Geçişi", tasks: "- Seviye geçiş mantığı kur.\n- Open Level node kullan." },
  { title: "Gün 20: İkinci Level Tasarımı", tasks: "- Yeni bir sahne oluştur.\n- Öncekine göre zorluk artır." },
  { title: "Gün 21: Mini Proje 3", tasks: "- V2 prototip oyun: Menü, skor, AI, seviye geçişi" },

  { title: "Gün 22: Performans Optimizasyonu", tasks: "- Stat unit, LOD ayarları, ışık optimizasyonu öğren." },
  { title: "Gün 23: Build Alma", tasks: "- Projeyi Windows build olarak al." },
  { title: "Gün 24: Test ve Hata Ayıklama", tasks: "- Log, PrintString, Breakpoint kullanarak hata ayıkla." },
  { title: "Gün 25: Kaydet/Yükle Sistemi", tasks: "- SaveGame kullanarak veri kaydet ve yükle." },
  { title: "Gün 26: Geliştirme", tasks: "- Eksik kalan kısımları tamamla." },
  { title: "Gün 27: İyileştirme", tasks: "- UI, ses, ışık ve detayları geliştir." },
  { title: "Gün 28: Final Proje Testi", tasks: "- Oyun baştan sona oynanabilir mi kontrol et." },
  { title: "Gün 29: Sunuma Hazırlık", tasks: "- Kısa video veya ekran görüntüleri al." },
  { title: "Gün 30: Case Study Yazımı", tasks: "- Tüm süreci anlatan bir özet belge hazırla." },
];


const container = document.getElementById("days-container");

days.forEach((day, index) => {
  const dayDiv = document.createElement("div");
  dayDiv.className = "day";

  const title = document.createElement("h2");
  title.textContent = day.title;

  const task = document.createElement("div");
  task.className = "tasks";
  task.textContent = day.tasks;

  const textarea = document.createElement("textarea");
  textarea.placeholder = "Bugünkü deneyimini yaz...";
  textarea.value = localStorage.getItem(`note-${index}`) || "";

  const button = document.createElement("button");
  button.textContent = "Kaydet";
  button.className = "save-btn";
  button.onclick = () => {
    localStorage.setItem(`note-${index}`, textarea.value);
    alert("Not kaydedildi!");
  };

  dayDiv.appendChild(title);
  dayDiv.appendChild(task);
  dayDiv.appendChild(textarea);
  dayDiv.appendChild(button);

  container.appendChild(dayDiv);
});
