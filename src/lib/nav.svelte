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
            path: "https://creator.nightcafe.studio/my-creations?q=published",
            target: "_blank"
        },
        {
            title: "Contact",
            path: "/contact"
        }
    ]
</script>

<nav>
    {#each links as {title, path, target}}
        <a href={path} target={target}>{title}</a>
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