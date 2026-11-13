   const db = supabase.createClient('https://mshdvgvmtyyhxqlienbo.supabase.co','sb_publishable_KwnafoD1BPHQf8edNpA_ag_WPdRNJaa');
   const form = document.querySelector('.formulario');

   form.addEventListener('submit', async (e) => {
     e.preventDefault();
     const dados = Object.fromEntries(new FormData(form));
     const { error } = await db.from('agendamentos').insert(dados);
     if (error) { alert('Erro ao agendar: ' + error.message); return; }
     alert('Agendamento salvo!');
     form.reset();
   });