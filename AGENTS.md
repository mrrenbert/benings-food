<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Storefront architecture
- Use TanStack file routes for content pages and product details; this preserves the platform's routing and page metadata conventions.
- Keep shared storefront navigation, footer, and cart provider in the root StoreShell; this retains the bag across client-side navigation.
- Keep product catalog data in a browser-safe module and cart state in React context; this project is a frontend preview with no order or payment service.
- Express brand styling through global semantic tokens and tea button variants; this keeps presentation consistent when brand values change.
