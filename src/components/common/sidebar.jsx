import React from 'react'
import styled from 'styled-components'

const SidebarContainer = styled.div`

.sidebar {
  width: 6.5rem;
  min-height: 100vh;
}

.sidebar .nav-item {
  position: relative;
}

.sidebar .nav-item:last-child {
  margin-bottom: 1rem;
}

.sidebar .nav-item .nav-link {
  text-align: center;
  padding: 0.75rem 1rem;
  width: 6.5rem;
}

.sidebar .nav-item .nav-link span {
  font-size: 0.65rem;
  display: block;
}

.sidebar .nav-item.active .nav-link {
  font-weight: 700;
}

.sidebar .nav-item .collapse {
  position: absolute;
  left: calc(6.5rem + 1.5rem / 2);
  z-index: 1;
  top: 2px;
}

.sidebar .nav-item .collapse .collapse-inner {
  border-radius: 0.35rem;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
}

.sidebar .nav-item .collapsing {
  display: none;
  transition: none;
}

.sidebar .nav-item .collapse .collapse-inner,
.sidebar .nav-item .collapsing .collapse-inner {
  padding: .5rem 0;
  min-width: 10rem;
  font-size: 0.85rem;
  margin: 0 0 1rem 0;
}

.sidebar .nav-item .collapse .collapse-inner .collapse-header,
.sidebar .nav-item .collapsing .collapse-inner .collapse-header {
  margin: 0;
  white-space: nowrap;
  padding: .5rem 1.5rem;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 0.65rem;
  color: #b7b9cc;
}

.sidebar .nav-item .collapse .collapse-inner .collapse-item,
.sidebar .nav-item .collapsing .collapse-inner .collapse-item {
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  display: block;
  color: #3a3b45;
  text-decoration: none;
  border-radius: 0.35rem;
  white-space: nowrap;
}

.sidebar .nav-item .collapse .collapse-inner .collapse-item:hover,
.sidebar .nav-item .collapsing .collapse-inner .collapse-item:hover {
  background-color: #eaecf4;
}

.sidebar .nav-item .collapse .collapse-inner .collapse-item:active,
.sidebar .nav-item .collapsing .collapse-inner .collapse-item:active {
  background-color: #dddfeb;
}

.sidebar .nav-item .collapse .collapse-inner .collapse-item.active,
.sidebar .nav-item .collapsing .collapse-inner .collapse-item.active {
  color: #4e73df;
  font-weight: 700;
}

.sidebar #sidebarToggle {
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  cursor: pointer;
}

.sidebar #sidebarToggle::after {
  font-weight: 900;
  content: '\f104';
  font-family: 'Font Awesome 5 Free';
  margin-right: 0.1rem;
}

.sidebar #sidebarToggle:hover {
  text-decoration: none;
}

.sidebar #sidebarToggle:focus {
  outline: none;
}

.sidebar.toggled {
  width: 0 !important;
  overflow: hidden;
}

.sidebar.toggled #sidebarToggle::after {
  content: '\f105';
  font-family: 'Font Awesome 5 Free';
  margin-left: 0.25rem;
}

.sidebar .sidebar-brand {
  height: 4.375rem;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 800;
  padding: 1.5rem 1rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  z-index: 1;
}

.sidebar .sidebar-brand .sidebar-brand-icon i {
  font-size: 2rem;
}

.sidebar .sidebar-brand .sidebar-brand-text {
  display: none;
}

.sidebar hr.sidebar-divider {
  margin: 0 1rem 1rem;
}

.sidebar .sidebar-heading {
  text-align: center;
  padding: 0 1rem;
  font-weight: 800;
  font-size: 0.65rem;
}

@media (min-width: 768px) {
  .sidebar {
    width: 14rem !important;
  }
  .sidebar .nav-item .collapse {
    position: relative;
    left: 0;
    z-index: 1;
    top: 0;
    -webkit-animation: none;
    animation: none;
  }
  .sidebar .nav-item .collapse .collapse-inner {
    border-radius: 0;
    box-shadow: none;
  }
  .sidebar .nav-item .collapsing {
    display: block;
    transition: height 0.15s ease;
  }
  .sidebar .nav-item .collapse,
  .sidebar .nav-item .collapsing {
    margin: 0 1rem;
  }
  .sidebar .nav-item .nav-link {
    display: block;
    width: 100%;
    text-align: left;
    padding: 1rem;
    width: 14rem;
  }
  .sidebar .nav-item .nav-link i {
    font-size: 0.85rem;
    margin-right: 0.25rem;
  }
  .sidebar .nav-item .nav-link span {
    font-size: 0.85rem;
    display: inline;
  }
  .sidebar .nav-item .nav-link[data-toggle="collapse"]::after {
    width: 1rem;
    text-align: center;
    float: right;
    vertical-align: 0;
    border: 0;
    font-weight: 900;
    content: '\f107';
    font-family: 'Font Awesome 5 Free';
  }
  .sidebar .nav-item .nav-link[data-toggle="collapse"].collapsed::after {
    content: '\f105';
  }
  .sidebar .sidebar-brand .sidebar-brand-icon i {
    font-size: 2rem;
  }
  .sidebar .sidebar-brand .sidebar-brand-text {
    display: inline;
  }
  .sidebar .sidebar-heading {
    text-align: left;
  }
  .sidebar.toggled {
    overflow: visible;
    width: 6.5rem !important;
  }
  .sidebar.toggled .nav-item .collapse {
    position: absolute;
    left: calc(6.5rem + 1.5rem / 2);
    z-index: 1;
    top: 2px;
    -webkit-animation-name: growIn;
    animation-name: growIn;
    -webkit-animation-duration: 200ms;
    animation-duration: 200ms;
    -webkit-animation-timing-function: transform cubic-bezier(0.18, 1.25, 0.4, 1), opacity cubic-bezier(0, 1, 0.4, 1);
    animation-timing-function: transform cubic-bezier(0.18, 1.25, 0.4, 1), opacity cubic-bezier(0, 1, 0.4, 1);
  }
  .sidebar.toggled .nav-item .collapse .collapse-inner {
    box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
    border-radius: 0.35rem;
  }
  .sidebar.toggled .nav-item .collapsing {
    display: none;
    transition: none;
  }
  .sidebar.toggled .nav-item .collapse,
  .sidebar.toggled .nav-item .collapsing {
    margin: 0;
  }
  .sidebar.toggled .nav-item:last-child {
    margin-bottom: 1rem;
  }
  .sidebar.toggled .nav-item .nav-link {
    text-align: center;
    padding: 0.75rem 1rem;
    width: 6.5rem;
  }
  .sidebar.toggled .nav-item .nav-link span {
    font-size: 0.65rem;
    display: block;
  }
  .sidebar.toggled .nav-item .nav-link i {
    margin-right: 0;
  }
  .sidebar.toggled .nav-item .nav-link[data-toggle="collapse"]::after {
    display: none;
  }
  .sidebar.toggled .sidebar-brand .sidebar-brand-icon i {
    font-size: 2rem;
  }
  .sidebar.toggled .sidebar-brand .sidebar-brand-text {
    display: none;
  }
  .sidebar.toggled .sidebar-heading {
    text-align: center;
  }
}

.sidebar-light .sidebar-brand {
  color: #6e707e;
}

.sidebar-light hr.sidebar-divider {
  border-top: 1px solid #eaecf4;
}

.sidebar-light .sidebar-heading {
  color: #b7b9cc;
}

.sidebar-light .nav-item .nav-link {
  color: #858796;
}

.sidebar-light .nav-item .nav-link i {
  color: #d1d3e2;
}

.sidebar-light .nav-item .nav-link:active, .sidebar-light .nav-item .nav-link:focus, .sidebar-light .nav-item .nav-link:hover {
  color: #6e707e;
}

.sidebar-light .nav-item .nav-link:active i, .sidebar-light .nav-item .nav-link:focus i, .sidebar-light .nav-item .nav-link:hover i {
  color: #6e707e;
}

.sidebar-light .nav-item .nav-link[data-toggle="collapse"]::after {
  color: #b7b9cc;
}

.sidebar-light .nav-item.active .nav-link {
  color: #6e707e;
}

.sidebar-light .nav-item.active .nav-link i {
  color: #6e707e;
}

.sidebar-light #sidebarToggle {
  background-color: #eaecf4;
}

.sidebar-light #sidebarToggle::after {
  color: #b7b9cc;
}

.sidebar-light #sidebarToggle:hover {
  background-color: #dddfeb;
}

.sidebar-dark .sidebar-brand {
  color: #fff;
}

.sidebar-dark hr.sidebar-divider {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.sidebar-dark .sidebar-heading {
  color: rgba(255, 255, 255, 0.4);
}

.sidebar-dark .nav-item .nav-link {
  color: rgba(255, 255, 255, 0.8);
}

.sidebar-dark .nav-item .nav-link i {
  color: rgba(255, 255, 255, 0.3);
}

.sidebar-dark .nav-item .nav-link:active, .sidebar-dark .nav-item .nav-link:focus, .sidebar-dark .nav-item .nav-link:hover {
  color: #fff;
}

.sidebar-dark .nav-item .nav-link:active i, .sidebar-dark .nav-item .nav-link:focus i, .sidebar-dark .nav-item .nav-link:hover i {
  color: #fff;
}

.sidebar-dark .nav-item .nav-link[data-toggle="collapse"]::after {
  color: rgba(255, 255, 255, 0.5);
}

.sidebar-dark .nav-item.active .nav-link {
  color: #fff;
}

.sidebar-dark .nav-item.active .nav-link i {
  color: #fff;
}

.sidebar-dark #sidebarToggle {
  background-color: rgba(255, 255, 255, 0.2);
}

.sidebar-dark #sidebarToggle::after {
  color: rgba(255, 255, 255, 0.5);
}

.sidebar-dark #sidebarToggle:hover {
  background-color: rgba(255, 255, 255, 0.25);
}

.sidebar-dark.toggled #sidebarToggle::after {
  color: rgba(255, 255, 255, 0.5);
}

.bg-gradient-primary {
  background-color: #4e73df;
  background-image: linear-gradient(180deg, #4e73df 10%, #224abe 100%);
  background-size: cover;
  width: 6.5rem;
  min-height: 100vh;
}

  .sidebar,
  .topbar {
    .nav-item {
      &.dropdown {
        .dropdown-toggle {
          &::after {
            width: 1rem;
            text-align: center;
            float: right;
            vertical-align: 0;
            border: 0;
            font-weight: 900;
            content: '\f105';
            font-family: 'Font Awesome 5 Free';
          }
        }
        &.show {
          .dropdown-toggle::after {
            content: '\f107';
          }
        }
      }
      .nav-link {
        position: relative;
        .badge-counter {
          position: absolute;
          transform: scale(0.7);
          transform-origin: top right;
          right: .25rem;
          margin-top: -.25rem;
        }
        .img-profile {
          height: 2rem;
          width: 2rem;
        }
      }
    }
  }

.sidebar {
  width: ${({ theme }) => theme.spacing.sidebarCollapsedWidth};
  min-height: 100vh;
  .nav-item {
    position: relative;
    &:last-child {
      margin-bottom: 1rem;
    }
    .nav-link {
      text-align: center;
      padding: 0.75rem 1rem;
      width: ${({ theme }) => theme.spacing.sidebarCollapsedWidth};
      span {
        font-size: 0.65rem;
        display: block;
      }
    }
    &.active {
      .nav-link {
        font-weight: 700;
      }
    }
    .collapse {
      position: absolute;
      left: calc(#{${({ theme }) => theme.spacing.sidebarCollapsedWidth}} + #{$grid-gutter-width} / 2);
      z-index: 1;
      top: 2px;
      @extend .animated--grow-in;
      .collapse-inner {
        border-radius: $border-radius;
        box-shadow: $box-shadow;
      }
    }
    .collapsing {
      display: none;
      transition: none;
    }
    .collapse,
    .collapsing {
      .collapse-inner {
        padding: .5rem 0;
        min-width: 10rem;
        font-size: $dropdown-font-size;
        margin: 0 0 1rem 0;
        .collapse-header {
          margin: 0;
          white-space: nowrap;
          padding: .5rem 1.5rem;
          text-transform: uppercase;
          font-weight: 800;
          font-size: 0.65rem;
          color: ${({ theme }) => theme.colors.gray500};
        }
        .collapse-item {
          padding: 0.5rem 1rem;
          margin: 0 0.5rem;
          display: block;
          color: ${({ theme }) => theme.colors.gray900};
          text-decoration: none;
          border-radius: $border-radius;
          white-space: nowrap;
          &:hover {
            background-color: ${({ theme }) => theme.colors.gray200};
          }
          &:active {
            background-color: ${({ theme }) => theme.colors.gray300};
          }
          &.active {
            color: ${({ theme }) => theme.colors.primary};
            font-weight: 700;
          }
        }
      }
    }
  }
  #sidebarToggle {
    width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    margin-bottom: 1rem;
    cursor: pointer;
    &::after {
      font-weight: 900;
      content: '\f104';
      font-family: 'Font Awesome 5 Free';
      margin-right: 0.1rem;
    }
    &:hover {
      text-decoration: none;
    }
    &:focus {
      outline: none;
    }
  }
  &.toggled {
    width: 0 !important;
    overflow: hidden;
    #sidebarToggle::after {
      content: '\f105';
      font-family: 'Font Awesome 5 Free';
      margin-left: 0.25rem;
    }
  }
  .sidebar-brand {
    height: ${({ theme }) => theme.spacing.topbarBaseHeight};
    text-decoration: none;
    font-size: 1rem;
    font-weight: 800;
    padding: 1.5rem 1rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    z-index: 1;

    .sidebar-brand-icon i {
      font-size: 2rem;
    }
    .sidebar-brand-text {
      display: none;
    }
  }
  hr.sidebar-divider {
    margin: 0 1rem 1rem;
  }
  .sidebar-heading {
    text-align: center;
    padding: 0 1rem;
    font-weight: 800;
    font-size: 0.65rem;
    @extend .text-uppercase;
  }
}

@include media-breakpoint-up(md) {
  .sidebar {
    width: ${({ theme }) => theme.spacing.sidebarBaseWidth} !important;
    .nav-item {
      .collapse {
        position: relative;
        left: 0;
        z-index: 1;
        top: 0;
        animation: none;
        .collapse-inner {
          border-radius: 0;
          box-shadow: none;
        }
      }
      .collapsing {
        display: block;
        transition: $transition-collapse;
      }
      .collapse,
      .collapsing {
        margin: 0 1rem;
      }
      .nav-link {
        display: block;
        width: 100%;
        text-align: left;
        padding: 1rem;
        width: ${({ theme }) => theme.spacing.sidebarBaseWidth}
        i {
          font-size: 0.85rem;
          margin-right: 0.25rem;
        }
        span {
          font-size: 0.85rem;
          display: inline;
        }
        &[data-toggle="collapse"] {
          &::after {
            width: 1rem;
            text-align: center;
            float: right;
            vertical-align: 0;
            border: 0;
            font-weight: 900;
            content: '\f107';
            font-family: 'Font Awesome 5 Free';
          }
          &.collapsed::after {
            content: '\f105';
          }
        }
      }
    }
    .sidebar-brand {
      .sidebar-brand-icon i {
        font-size: 2rem;
      }
      .sidebar-brand-text {
        display: inline;
      }
    }
    .sidebar-heading {
      text-align: left;
    }
    &.toggled {
      overflow: visible;
      width: ${({ theme }) => theme.spacing.sidebarCollapsedWidth} !important;
      .nav-item {
        // Accordion
        .collapse {
          position: absolute;
          left: calc(#{${({ theme }) => theme.spacing.sidebarCollapsedWidth}} + #{$grid-gutter-width} / 2);
          z-index: 1;
          top: 2px;
          animation-name: growIn;
          animation-duration: 200ms;
          animation-timing-function: transform cubic-bezier(.18,1.25,.4,1), opacity cubic-bezier(0,1,.4,1);
          .collapse-inner {
            box-shadow: $box-shadow;
            border-radius: $border-radius;
          }
        }
        .collapsing {
          display: none;
          transition: none;
        }
        .collapse,
        .collapsing {
          margin: 0;
        }
        &:last-child {
          margin-bottom: 1rem;
        }
        .nav-link {
          text-align: center;
          padding: 0.75rem 1rem;
          width: ${({ theme }) => theme.spacing.sidebarCollapsedWidth};
          span {
            font-size: 0.65rem;
            display: block;
          }
          i {
            margin-right: 0;
          }
          &[data-toggle="collapse"]::after {
            display: none;
          }
        }
      }
      .sidebar-brand {
        .sidebar-brand-icon i {
          font-size: 2rem;
        }
        .sidebar-brand-text {
          display: none;
        }
      }
      .sidebar-heading {
        text-align: center;
      }
    }
  }
}


.sidebar-light {
  .sidebar-brand {
    color: ${({ theme }) => theme.colors.gray700};
  }
  hr.sidebar-divider {
    border-top: 1px solid ${({ theme }) => theme.colors.gray200};
  }
  .sidebar-heading {
    color: ${({ theme }) => theme.colors.gray500};
  }
  .nav-item {
    .nav-link {
      color: ${({ theme }) => theme.colors.gray600};
      i {
        color: ${({ theme }) => theme.colors.gray400};
      }
      &:active,
      &:focus,
      &:hover {
        color: ${({ theme }) => theme.colors.gray700};
        i {
          color: ${({ theme }) => theme.colors.gray700};
        }
      }
      // Accordion
      &[data-toggle="collapse"]::after {
        color: ${({ theme }) => theme.colors.gray500};
      }
    }
    &.active {
      .nav-link {
        color: ${({ theme }) => theme.colors.gray700};
        i {
          color: ${({ theme }) => theme.colors.gray700};
        }
      }
    }
  }
  #sidebarToggle {
    background-color: ${({ theme }) => theme.colors.gray200};
    &::after {
      color: ${({ theme }) => theme.colors.gray500};
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray300};
    }
  }
}

.sidebar-dark {
  .sidebar-brand {
    color: ${({ theme }) => theme.colors.white};
  }
  hr.sidebar-divider {
    border-top: 1px solid fade-out(${({ theme }) => theme.colors.white};, 0.85);
  }
  .sidebar-heading {
    color: fade-out(${({ theme }) => theme.colors.white}, 0.6);
  }
  .nav-item {
    .nav-link {
      color: fade-out(${({ theme }) => theme.colors.white}, 0.2);
      i {
        color: fade-out(${({ theme }) => theme.colors.white}, 0.7);
      }
      &:active,
      &:focus,
      &:hover {
        color: ${({ theme }) => theme.colors.white};
        i {
          color: ${({ theme }) => theme.colors.white};
        }
      }
      // Accordion
      &[data-toggle="collapse"]::after {
        color: fade-out(${({ theme }) => theme.colors.white}, 0.5);
      }
    }
    &.active {
      .nav-link {
        color: ${({ theme }) => theme.colors.white};
        i {
          color: ${({ theme }) => theme.colors.white};
        }
      }
    }
  }
  // Color the sidebar toggler
  #sidebarToggle {
    background-color: fade-out(${({ theme }) => theme.colors.white}, 0.8);
    &::after {
      color: fade-out(${({ theme }) => theme.colors.white}, 0.5);
    }
    &:hover {
      background-color: fade-out(${({ theme }) => theme.colors.white}, 0.75);
    }
  }
  &.toggled {
    #sidebarToggle::after {
      color: fade-out(${({ theme }) => theme.colors.white}, 0.5);
    }
  }
}

`
const Sidebar = () => (
  <SidebarContainer>

    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      {/* <!-- Sidebar - Brand --> */}
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin
          <sup>2</sup>
        </div>
      </a>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item">
        <a className="nav-link" href="index.html">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Dashboard</span>

        </a>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">
        Interface
      </div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li className="nav-item">
        <a className="nav-link collapsed" href="#d" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <i className="fas fa-fw fa-cog" />
          <span>Components</span>
        </a>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <a className="collapse-item" href="buttons.html">Buttons</a>
            <a className="collapse-item" href="cards.html">Cards</a>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Utilities Collapse Menu --> */}
      <li className="nav-item">
        <a className="nav-link collapsed" href="#d" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
          <i className="fas fa-fw fa-wrench" />
          <span>Utilities</span>
        </a>
        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Utilities:</h6>
            <a className="collapse-item" href="utilities-color.html">Colors</a>
            <a className="collapse-item" href="utilities-border.html">Borders</a>
            <a className="collapse-item" href="utilities-animation.html">Animations</a>
            <a className="collapse-item" href="utilities-other.html">Other</a>
          </div>
        </div>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">
        Addons
      </div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li className="nav-item active">
        <a className="nav-link" href="#d" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
          <i className="fas fa-fw fa-folder" />
          <span>Pages</span>
        </a>
        <div id="collapsePages" className="collapse show" aria-labelledby="headingPages" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Login Screens:</h6>
            <a className="collapse-item" href="login.html">Login</a>
            <a className="collapse-item" href="register.html">Register</a>
            <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
            <div className="collapse-divider" />
            <h6 className="collapse-header">Other Pages:</h6>
            <a className="collapse-item active" href="404.html">404 Page</a>
            <a className="collapse-item" href="blank.html">Blank Page</a>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Charts --> */}
      <li className="nav-item">
        <a className="nav-link" href="charts.html">
          <i className="fas fa-fw fa-chart-area" />
          <span>Charts</span>

        </a>
      </li>

      {/* <!-- Nav Item - Tables --> */}
      <li className="nav-item">
        <a className="nav-link" href="tables.html">
          <i className="fas fa-fw fa-table" />
          <span>Tables</span>

        </a>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />

      {/* <!-- Sidebar Toggler (Sidebar) --> */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div>

    </ul>
  </SidebarContainer>
)

export default Sidebar
