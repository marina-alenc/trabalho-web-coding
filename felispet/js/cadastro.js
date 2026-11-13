const db = supabase.createClient('https://mshdvgvmtyyhxqlienbo.supabase.co', 'sb_publishable_KwnafoD1BPHQf8edNpA_ag_WPdRNJaa');
const form = document.querySelector('.formulario');
const mensagem = document.getElementById('mensagem');

function mostrarMensagem(texto, tipo) {
  mensagem.textContent = texto;
  mensagem.className = 'formulario__mensagem formulario__mensagem--' + tipo;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const botao = form.querySelector('button[type="submit"]');
  const f = new FormData(form);

  const registro = {
    nome_pet: f.get('nome-pet'),
    especie: f.get('especie'),
    raca: f.get('raca'),
    idade: f.get('idade') ? Number(f.get('idade')) : null,
    porte: f.get('porte'),
    nome_tutor: f.get('nome-tutor'),
    telefone: f.get('telefone'),
    email: f.get('email'),
    obs: f.get('obs')
  };

  botao.disabled = true;
  const { error } = await db.from('pets').insert(registro);
  botao.disabled = false;

  if (error) {
    console.error(error);
    mostrarMensagem('Erro ao cadastrar: ' + error.message, 'erro');
    return;
  }
  mostrarMensagem('Pet cadastrado com sucesso!', 'sucesso');
  form.reset();
});
