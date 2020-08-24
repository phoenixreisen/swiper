import logo from './phx.logo.svg';
import m from 'mithril';

interface Attrs {
    url?: string,
    tab?: string,
    title?: string,
    version?: string,
    toggleNav?: () => void,
}

export const Header: m.Component<Attrs> = {

    view: ({attrs}) => {
        const {toggleNav} = attrs as Attrs;
        const {version, url, title, tab} = attrs as Attrs;
        const {protocol, host, pathname} = location as Location;

        const href = !url
            ? `${protocol || ''}//${host}${(pathname?.length > 1) ? pathname : ''}`
            : url;

        return (
            <article class="phx-header">
                <a href={href} target={tab || '_self'} title={title || ''}>
                    <picture class="phx-header__logo">
                        <img src={logo} />
                    </picture>
                </a>

                {version ?
                    <div class="phx-header__version">
                        {version}
                    </div>
                    : ''}

                {toggleNav ?
                    <div class="phx-header__nav-btn">
                        <a href="javascript:" title="Navigation ein- & ausblenden" class="phx-nav-btn noprint"
                            onclick={() => toggleNav()}>
                            <i class="fas fa-bars"></i>
                        </a>
                    </div>
                    : ''}
            </article>
        );
    },
};

export default Header;