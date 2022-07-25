<script>
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Posts",
            path: "/posts"
        },
        {
            title: "Art",
            path: "/art"
        },
        {
            title: "Contact",
            path: "/contact"
        }
    ]
</script>

<nav>
    {#each links as {title, path}}
        <a href={path}>{title}</a>
    {/each}
</nav>

<style>
    nav {
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
        text-align: center;
    }
    a {
        margin: .5rem auto;
        border: 1px solid var(--clr-magenta-lt);
        width: 100%;
        padding: .5rem;
        border-radius: .5rem;
    }
</style>