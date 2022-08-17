<script>
    import Nav from "../components/Nav.svelte"
    import Footer from "../components/Footer.svelte";
    import "../app.css";
</script>

<Nav />

<div class="flex  h-screen">
    <div class="m-auto"> 
         <slot />
    </div>
</div>

<Footer />
 
   