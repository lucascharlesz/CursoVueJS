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
		  <div class="modal-content">
		  	<div class="box">
		    	<slot></slot>
	    	</div>
		  </div>
		  <button class="modal-close is-large" aria-label="close" @click="hideModal"></button>
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


new Vue({
	el: "#app",
	methods: {
		toggleModal() {
			console.log(this.$refs);
			this.$refs.alert_modal.modal_class = "modal is-active"
		}
	}
});