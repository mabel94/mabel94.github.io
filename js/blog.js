function get_masthead(){
    document.getElementById("masthead").innerHTML ="<div class='container blog-masthead'><div class='blog-masthead-insert'><h1 class='blog-title'> Fabled Raven</h1><p class='lead blog-description'>Living in a mostly harmless world</p></div></div>";
}

function get_nav(current){
    document.getElementById("nav").innerHTML = `
     
        <nav class="blog-nav">
                <div class="container">
                  <a class="blog-nav-item" id = "home" href="index.html">Home</a>
                  <a class="blog-nav-item" id = "coding projects" href="#">Coding Projects (soon!)</a>
                  <a class="blog-nav-item" id = "til" href="til.html">Things I like</a>
                  <a class="blog-nav-item" id = "tih" href="tih.html">Things I hate</a>
                  <a class="blog-nav-item" id = "contact" href="contact.html">Contact</a>
                </div>

        </nav>
	`;
    var current_class = document.getElementById(current);
    current_class.className = "blog-nav-item active";
    current_class.href = "#";

}

function get_sidebar(){
    document.getElementById("sidebar").innerHTML = `


 <div class="col-sm-3 col-sm-offset-1 blog-sidebar">
          <div class="sidebar-module sidebar-module-inset">
            <h4>About This Blog</h4>
            <p>Documenting my journey through life with computer science and the love of all things controversial</p>
          </div>
      
          <div class="sidebar-module">
            <h4>Elsewhere</h4>
            <ol class="list-unstyled">
              <li><a href="#">Bitbucket</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="./facebook.html">Facebook</a></li>
            </ol>
            <img style="margin-top:10px" src="http://static.fsf.org/nosvn/associate/crm/1090777.png"/>
          </div>
        </div><!-- /.blog-sidebar -->

        

      </div><!-- /.row -->

    </div><!-- /.container -->



    `;
}

function get_footer(){
    var foot = document.getElementById("footer");
    
   
    foot.innerHTML=`
 <img class="blog-footer-img" src="src/d.jpg">
    <p>Blog template built for <a href='http://getbootstrap.com'>Bootstrap</a> by <a href='https://twitter.com/mdo'>@mdo</a>.<br> Extended by me. <br>
        <a href='#'>Back to top</a>
	</p>

	`;
}

/*
function add_article(file){
    var imported = document.createElement('article');
    imported.src = '../articles/'.concat(file);
    var thing = document.getElementById('thing');
    thing.innerHTML=imported.src;
    document.head.appendChild(imported);
}
*/
