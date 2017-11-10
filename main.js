Vue.component("lista-tarefas", {
	template: "<div name='lista-tarefas'><tarefa v-for='tarefa in tarefas'> {{ tarefa.descricao }} </tarefa></div>",

	data() {
		return {
			tarefas: [
				{ descricao: "Continuar o curso de VueJS" },
				{ descricao: "Finalizar o curso de Rails" },
				{ descricao: "Realizar o curso de Rails API" }
			]
		}
	}
});

Vue.component("tarefa", {
	template: "<li> <slot></slot> </li>"
});

Vue.component("message", {
	props: [
		"message_title", 
	],
	template: `
		<article class="message" v-show="visible">
		  <div class="message-header">
		    <p>{{ message_title }}</p>
		    <button class="delete" aria-label="delete" @click="hideMessage"></button>
		  </div>
		  <div class="message-body">
		    <slot></slot>
		  </div>
		</article>
	`,
	data() {
		return {
			visible: true,
		}
	},

	methods: {
		hideMessage() {
			this.visible = false;
		}
	}
});


Vue.component("modal", {
	template: `
		<div :class="modal_class">
		<div class="modal-background"></div>
			<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title"><slot name="header"></slot></p>
				<button class="delete" aria-label="close" @click="hideModal"></button>
			</header>
			<section class="modal-card-body">
				<slot></slot>
			</section>
			<footer class="modal-card-foot">
				<button class="button is-success"><slot name="confirm-button"></slot></button>
				<button class="button" @click="hideModal"><slot name="cancel-button"></slot></button>
			</footer>
			</div>
		</div>
	`,
	data() {
		return {
			modal_class: "modal",
		}
	},

	methods: {
		hideModal() {
			this.modal_class = "modal";
		}
	}
});


Vue.component("tabs", {
	template: `
		<div>
			<div class="tabs">
				<ul>
					<li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
						<a href="#" @click="activeTab(tab)">{{ tab.name }}</a>
					</li>
				</ul>
			</div>
			<div class="tabs-contents">
				<slot></slot>
			</div>
		</div>
	`,
	created(){
		this.tabs = this.$children;
	},
	mounted(){
		this.tabs[0].isActive = true;
	},
	data() {
		return {
			tabs: [],
		};
	},
	methods: {
		activeTab(tab) {
			this.tabs.forEach(t => {
				t.isActive = (tab == t);
			})
		}
	}
});


Vue.component("tab", {
	props: {
		name: { required: true },
	},
	template: `
		<div class="tab" v-show="isActive">
			<slot></slot>
		</div>
	`,
	data() {
		return {
			isActive: false,
		}
	},
});


new Vue({
	el: "#app",
	methods: {
		toggleModal() {
			console.log(this.$refs);
			this.$refs.alert_modal.modal_class = "modal is-active"
		}
	}
});