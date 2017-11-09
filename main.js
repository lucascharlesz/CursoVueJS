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
		"messageTitle", 
	],
	template: `
		<article class="message" v-show="visible">
		  <div class="message-header">
		    <p>{{ messageTitle }}</p>
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

new Vue({
	el: "#app"
});