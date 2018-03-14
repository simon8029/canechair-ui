import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'material-ui/Button';
import { FormattedMessage } from 'react-intl';

export class SideBarItems extends React.Component {
  nav: HTMLUListElement | null;
  componentDidMount() {
    // const { history }: any = this.props;
    //   const $nav = $(this.nav);
    //   const slideDuration = 250;

    //   $nav.slimscroll({
    //     height: '100%'
    //   });

    //   const pathname = `#${history.location.pathname}`;// get current path

    //   $('ul.nav-menu > li.menu').click(function () {
    //     const menuLi = this;
    //     $('ul.nav-menu > li.menu').not(menuLi).removeClass('open');
    //     $('ul.nav-menu > li.menu ul').not($('ul', menuLi)).slideUp(slideDuration);
    //     $('> ul', menuLi).slideToggle(slideDuration);
    //     $(menuLi).toggleClass('open');
    //   });

    //   $('ul.sub-menu li').click(function (e) {
    //     let superSubMenu = $(this).parent();
    //     if (superSubMenu.parent().hasClass('active')) {
    //       $('li', superSubMenu).not($(this)).removeClass('active');
    //     }
    //     else {
    //       $('ul.sub-menu li').not($(this)).removeClass('active');
    //     }

    //     $(this).toggleClass('active');
    //     e.stopPropagation();
    //   });

    //   const activeLi = $('a[href="' + pathname + '"]');// select current a element
    //   const activeNav = activeLi.closest('ul'); // select closest ul
    //   if (activeNav.hasClass('sub-menu')) {
    //     activeNav.slideDown(slideDuration);
    //     activeNav.parent().addClass('open');
    //     activeLi.parent().addClass('active');
    //   } else {
    //     activeLi.parent().addClass('open');
    //   }
    // }
  }

  render() {
    return (
      <ul className="nav-menu" ref={(c) => {
        this.nav = c;
      }}>

        <li className="nav-header"> CRM Core</li>

        <li className="menu">
          <Button href="javascript:void(0)">
            <i className="zmdi zmdi-view-dashboard zmdi-hc-fw" />
            <span className="nav-text">
              <FormattedMessage id="sidebar.dashboard" />
            </span>
          </Button>
          <ul className="sub-menu">
            <li>
              <NavLink className="prepend-icon" to="/Dashboard/Default">
                <span className="nav-text"><FormattedMessage id="sidebar.dashboard.default" /></span>
              </NavLink>
            </li>
          </ul>

        </li>

        <li className="ui_tooltip menu">
          <Button className="void" href="javascript:void(0)">
            <i className="zmdi zmdi-folder zmdi-hc-fw" />
            <li className="nav-header"><FormattedMessage id="sidebar.modules" /></li>
          </Button>

          <ul className="sub-menu">
            <li>
              <NavLink className="prepend-icon" to="/app/components/alerts">
                <span className="nav-text"><FormattedMessage id="sidebar.CustomerManagement" /></span>
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default SideBarItems;
