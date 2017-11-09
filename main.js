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

new Vue({
	el: "#app"
});