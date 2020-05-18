sudo apt install mixxx git unzip
mixxx
sudo mkdir /tmp/mixxx
sudo git clone https://github.com/JakubKrizka/Akiyama-Quark-SC-Mixxx-MIDI-mapping.git /tmp/
sudo mv /tmp/mixxx/QUARK_SC.js /usr/share/mixxx/controllers
sudo mv /tmp/mixxx/QUARK_SC.midi.xml /usr/share/mixxx/controllers
sudo unzip /tmp/mixxx/CrossFoxx.zip -d /usr/share/mixxx/skins
sudo rm -R /tmp/mixxx
mixxx
