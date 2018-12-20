<template>
	<v-app id="inspire" dark>
		<!--
			<v-navigation-drawer v-model="drawer" clipped fixed app>
				<v-list dense>
					<v-list-tile>
						<v-list-tile-content>
							<v-list-tile-title></v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-list-tile>
						<v-list-tile-content>
							<v-list-tile-title></v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-list-tile href="#top">
						<v-list-tile-content>
							<v-list-tile-title>TOP</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-list-tile href="#about">
						<v-list-tile-content>
							<v-list-tile-title>ABOUT ME</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-list-tile href="#skill">
						<v-list-tile-content>
							<v-list-tile-title>SKILL</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-list-tile href="#links">
						<v-list-tile-content>
							<v-list-tile-title>LINKS</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list>
			</v-navigation-drawer>
		-->
		<v-toolbar fixed clipped-left>
			<!--
				<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
			-->
			<v-toolbar-title>ShangShang.io</v-toolbar-title>
		</v-toolbar>
		<v-content id="page-content">
			<section id="top">
				<div class="background">
					<div class="contentbackground">
						<p class="content">Hello World!</p>
					</div>
				</div>
				<!--
					<v-btn class="scroll-button" @click="$vuetify.goTo('#about')">
						ABOUT ME
					</v-btn>
				-->
			</section>
			<section id="about">
				<p class="section-title">ABOUT ME</p>
				<v-avatar class="avatar" :size="120">
					<img src="~/assets/images/profile_s.jpg" alt="avatar" />
				</v-avatar>
				<div class="background">
					<p class="content">
						名前: 北山駿也<br />
						趣味:
						ランニング、料理、読書(小説から技術書まで)、シューティングゲーム(PS4)<br />
						職業: 大学生(2019年3月卒業予定。4月からフリーランスエンジニア)<br />
					</p>
				</div>
				<div class="background">
					<p class="content">
						大学4年次に、Webエンジニアのスキル習得のために1年休学をして上京。<br />
						1ヶ月半でRailsを主とした勉強をしてプログラミングスクールのメンターになる。<br />
						スキルアップのためにベンチャー企業で9ヶ月インターン(週5日フルタイム)を経験。<br />
						小規模チームでのアジャイル開発や、Dockerを利用したモダンな環境でバックエンドからフロントエンドまで開発に参加。<br />
						復学後はGPGPUを使用した粒子シミュレーションの高速化の研究に従事。<br />
					</p>
				</div>
				<!--
					<v-btn class="scroll-button" @click="$vuetify.goTo('#skill')">
						SKILL
					</v-btn>
				-->
			</section>
			<section id="skill">
				<p class="section-title">SKILL</p>
				<div class="background">
					<p class="content">
						サーバーサイド:
						<v-chip color="red darken-1" text-color="white"> Rails </v-chip>
						<v-chip color="red darken-1" text-color="white"> RSpec </v-chip
						><br />
						フロントエンド:
						<v-chip color="cyan darken-1" text-color="white"> HTML </v-chip>
						<v-chip color="yellow darken-2" text-color="white"> CSS </v-chip>
						<v-chip color="pink lighten-2" text-color="white"> Sass </v-chip>
						<v-chip color="lime darken-1" text-color="white">
							JavaScript
						</v-chip>
						<v-chip color="green darken-1" text-color="white"> Vue.js </v-chip>
						<v-chip color="green darken-1" text-color="white"> Nuxt.js </v-chip>
						<v-chip color="light-blue darken-1" text-color="white">
							React.js
						</v-chip>
						<v-chip color="light-blue darken-1" text-color="white">
							Redux </v-chip
						><br />
						データベース:
						<v-chip color="indigo darken-1" text-color="white"> MySQL </v-chip>
						<br />
						興味あり:
						<v-chip color="cyan lighten-1" text-color="white"> Go </v-chip>
						<v-chip color="orange darken-2" text-color="white">
							TypeScript
						</v-chip>
						<v-chip color="deep-purple darken-4" text-color="white">
							Elixir
						</v-chip>
						<br />
					</p>
				</div>
				<div class="background">
					<p class="content">
						三重からのフルリモートが可能な案件のみ受けます。<br />
						興味ありの欄にある言語やフレームワークを使用する案件は、未経験でよろしければぜひお声がけください。<br />
						2020年4月からは東京に移住したいと思っているので正社員で雇ってくださる企業を探してます。<br />
						柔軟な新卒採用してる企業様お待ちしてます。<br />
					</p>
				</div>
				<!--
					<v-btn class="scroll-button" @click="$vuetify.goTo('#links')">
						LINK
					</v-btn>
				-->
			</section>
			<section id="links">
				<p class="section-title">LINKS</p>
				<div class="background">
					<v-container>
						<v-layout align-center justify-center row wrap>
							<v-btn
								class="link-btn"
								color="light-blue darken-2"
								href="https://twitter.com/geek_shanshan"
								target="_blank"
								xs2
								sm3
							>
								Twitter
							</v-btn>
							<v-btn
								class="link-btn"
								color="blue-grey darken-2"
								href="https://github.com/shan-shan95"
								target="_blank"
								xs2
								sm3
							>
								GitHub
							</v-btn>
							<v-btn
								class="link-btn"
								color="red lighten-1"
								href="http://shanshan.hatenadiary.jp/"
								target="_blank"
								xs2
								sm3
							>
								Blog
							</v-btn>
							<v-btn
								class="link-btn"
								color="light-green accent-4"
								href="https://qiita.com/geek_shanshan"
								target="_blank"
								xs2
								sm3
							>
								Qiita
							</v-btn>
						</v-layout>
					</v-container>
				</div>
			</section>
		</v-content>
		<v-footer> <span>&copy; 2018 Shunya Kitayama</span> </v-footer>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		drawer: false
	}),
	props: {
		source: String
	}
}
</script>

<style lang="scss" scoped>
#page-content {
	background-image: url(../assets/images/background.jpg);
	background-position: center center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
	font-family: 'Yu Gothic';
	color: white;
}

#top {
	height: 100vh;

	.background {
		line-height: 90vh;
		height: 90vh;

		.content {
			font-weight: bold;
			text-align: center;
			font-size: calc(2.8rem + 1vw);
		}
	}

	.scroll-button {
		margin: auto;
		display: block;
		font-size: 1.3rem;
	}
}

#about {
	text-align: center;

	@media screen and (min-width: 480px) and (max-width: 768px) {
		height: 140vh;
	}

	@media screen and (min-width: 768px) and (max-width: 1024px) {
		height: 120vh;
	}

	@media screen and (min-width: 1024x) {
		height: 100vh;
	}

	.section-title {
		font-weight: bold;
		font-size: calc(1.4rem + 1vw);
	}

	.avatar {
		margin-bottom: 3vh;
	}

	.background {
		width: 80vw;
		background-color: rgba(0, 0, 0, 0.7);
		margin: auto;

		.content {
			word-wrap: break-word;
			line-height: 2rem;
			text-align: left;
			padding-left: 5%;
			padding-right: 5%;
			padding-top: 3%;
			padding-bottom: 3%;
		}
	}

	.scroll-button {
		margin: auto;
		display: block;
		font-size: 1.3rem;
	}
}

#about::before {
	content: '';
	display: block;
	height: 10vh;
}

#about::after {
	content: '';
	display: block;
	height: 10vh;
}

#skill {
	@media screen and (min-width: 480px) and (max-width: 767px) {
		height: 120vh;
	}

	@media screen and (min-width: 768px) and (max-width: 1023px) {
		height: 110vh;
	}

	@media screen and (min-width: 1024x) {
		height: 100vh;
	}

	.section-title {
		font-weight: bold;
		font-size: calc(1.4rem + 1vw);
		text-align: center;
	}

	.background {
		width: 80vw;
		background-color: rgba(0, 0, 0, 0.7);
		margin: auto;

		.content {
			word-wrap: break-word;
			line-height: 2rem;
			text-align: left;
			padding-left: 5%;
			padding-right: 5%;
			padding-top: 3%;
			padding-bottom: 3%;
		}
	}

	.scroll-button {
		margin: auto;
		display: block;
		font-size: 1.3rem;
	}
}

#skill::before {
	content: ' ';
	display: block;
	height: 10vh;
}

#skill::after {
	content: ' ';
	display: block;
	height: 10vh;
}

#links {
	@media screen and (min-width: 480px) and (max-width: 768px) {
		height: 100vh;
	}

	@media screen and (min-width: 768px) and (max-width: 1024px) {
		height: 100vh;
	}

	@media screen and (min-width: 1024x) {
		height: 100vh;
	}

	.section-title {
		font-weight: bold;
		font-size: calc(1.4rem + 1vw);
		text-align: center;
	}

	.background {
		width: 80vw;
		background-color: rgba(0, 0, 0, 0.7);
		margin: auto;

		.link-btn {
			display: inline-flex;
		}
	}
}

#links::before {
	content: ' ';
	display: block;
	height: 10vh;
}

#links::after {
	content: ' ';
	display: block;
	height: 50vh;
}
</style>
