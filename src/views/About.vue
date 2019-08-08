<template>
  <div class="about">
    <h1 class="display-2 font-weight-medium teal--text">About this portfolio</h1>
    <div class="my-3">
        <span>
          <v-icon x-large color="teal">mdi-vuejs</v-icon>
          <v-icon x-large color="teal">mdi-vuetify</v-icon>
          <v-icon x-large color="teal">mdi-docker</v-icon>
        </span>
      <p class="body-1 font-weight-light">
        このポートフォリオはVue.jsを用いて作成しました。UIライブラリにはVuetifyを採用しています。
        <br>
        VPS上に構築したDockerネットワークでnginxのリバースプロキシを用意し、その裏でサービスが動いています。また、このサーバーでは全ての公開サービスをDockerで動かしています。
      </p>
      <p class="body-1 font-weight-light">
        新しい試みとして開発環境もDockerで構築し、外のサーバにホスティングしてiPad 6thからssh接続で開発しています。
        <v-img class="my-2" src="https://pbs.twimg.com/media/EBOMQJ2UEAATKta.jpg:large" />
        iOS12で開発を行おうと思うと課題が多いのですが、ある程度は「どこかへsshする」ことで解決できます。sshクライアントさえ使えれば環境を問わず常に同じ感覚で開発が行えるのは魅力的です。
        <br>
        このようなポータブルな開発環境やクラウドIDEを構築することに興味があり、いろいろと思いつきで挑戦しています。
      </p>
      <v-btn outlined color="teal" href="https://github.com/s10akir/portfolio.mojamoja.work" target="_blank"><v-icon>mdi-git</v-icon>Github</v-btn>
    </div>
  </div>
</template>
