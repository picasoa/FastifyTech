// running a server 

const fastify =  require('fastify')({
	logger: true
})

// initial route 
fastify.get ('/g.',async (request,reply) =>{
	reply.redirect("https://google.com");
})

//run the server!

const serve  =  async ()=>{
	 try{
	 		fastify.listen(3000);
		 }catch(err) {
			fastify.log.error(err);
			process.exit(1);
	}
}

serve();