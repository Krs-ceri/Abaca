<!--
	Component pour le button event, quand on clique dessus on va sur une nouvelle page
-->
<script>
	import { Router, Link, Route } from "svelte-routing";
	let x = 136;
    function handleClick() {
        x += 1;
    }
</script>
      <section class="titlesection" >
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1>lorem ipsum</h1>

                            <h6>{x}/500</h6>
                            <br>
                            <br>
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
                            
                            <br><a href="" target="_blank"  class="todo">Travail</a> 
                            <br><a href="" target="_blank" class="todo">réalisation technique</a>
                            <br><a href="" target="_blank" class="todo">descriptif</a>
                            <br>
                            <br>
                            <center><button class="waves-effect waves-light btn-small" on:click={handleClick}>
                                    Join !
                            </button>
</center>
                        </div>
                    </div>
                </div>
            </section>

<style>
	*{
    margin: 0;
    padding: 0; 
}
.rate {
    float: left;
    height: 46px;
    padding: 0 10px;
    justify-content: center;
}
.rate:not(:checked) > input {
    position:absolute;
    top:-9999px;
}
.rate:not(:checked) > label {
    float:right;
    width:1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:30px;
    color:#ccc;
}
.rate:not(:checked) > label:before {
    content: '★ ';
}
.rate > input:checked ~ label {
    color: #ffc700;    
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
    color: #deb217;  
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
    color: #c59b08;
}

</style>