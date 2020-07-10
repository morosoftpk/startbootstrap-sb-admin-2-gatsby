import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Topbar = styled.div`
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


  .topbar {
    height: ${({ theme }) => theme.spacing.topbarBaseHeight};
    #sidebarToggleTop {
      height: 2.5rem;
      width: 2.5rem;
      &:hover {
        background-color: ${({ theme }) => theme.colors.gray200};
      }
      &:active {
        background-color: ${({ theme }) => theme.colors.gray300};
      }
    }
    .navbar-search {
      width: 25rem;
      input {
        font-size: 0.85rem;
        height: auto;
      }
    }
    .topbar-divider {
      width: 0;
      border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
      height: calc(${({ theme }) => theme.spacing.topbarBaseHeight} - 2rem);
      margin: auto 1rem;
    }
    .nav-item {
      .nav-link {
        height: ${({ theme }) => theme.spacing.topbarBaseHeight}
        display: flex;
        align-items: center;
        padding: 0 0.75rem;
        &:focus {
          outline: none;
        }
      }
      &:focus {
        outline: none;
      }
    }
    .dropdown {
      position: static;
      .dropdown-menu {
        width: calc(100% - {${({ theme }) => theme.spacing.gridGutterWidth}});
        right: $grid-gutter-width / 2;
      }
    }
    .dropdown-list {
      padding: 0;
      border: none;
      overflow: hidden;
      .dropdown-header {
        background-color: ${({ theme }) => theme.colors.primary};
        border: 1px solid ${({ theme }) => theme.colors.primary};
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        color: ${({ theme }) => theme.colors.white};
      }
      .dropdown-item {
        white-space: normal;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        border-left: 1px solid ${({ theme }) => theme.colors.borderColor};
        border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
        border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
        line-height: 1.3rem;
        .dropdown-list-image {
          position: relative;
          height: 2.5rem;
          width: 2.5rem;
          img {
            height: 2.5rem;
            width: 2.5rem;
          }
          .status-indicator {
            background-color: ${({ theme }) => theme.colors.gray200};
            height: 0.75rem;
            width: 0.75rem;
            border-radius: 100%;
            position: absolute;
            bottom: 0;
            right: 0;
            border: .125rem solid ${({ theme }) => theme.colors.white};
          }
        }
        .text-truncate {
          max-width: 10rem;
        }
        &:active {
          background-color: ${({ theme }) => theme.colors.gray200};
          color: ${({ theme }) => theme.colors.gray900};
        }
      }
    }
    @include media-breakpoint-up(sm) {
      .dropdown {
        position: relative;
        .dropdown-menu {
          width: auto;
          right: 0;
        }
      }
      .dropdown-list {
        width: 20rem !important;
        .dropdown-item {
          .text-truncate {
            max-width: 13.375rem;
          }
        }
      }
    }
  }

  .topbar.navbar-dark {
    .navbar-nav {
      .nav-item {
        .nav-link {
          color: fade-out(${({ theme }) => theme.colors.white};, 0.2);
          &:hover {
            color: ${({ theme }) => theme.colors.white};
          }
          &:active {
            color: ${({ theme }) => theme.colors.white};
          }
        }
      }
    }
  }

  .topbar.navbar-light {
    .navbar-nav {
      .nav-item {
        .nav-link {
          color: ${({ theme }) => theme.colors.gray400};
          &:hover {
            color: ${({ theme }) => theme.colors.gray500};
          }
          &:active {
            color: ${({ theme }) => theme.colors.gray600};
          }
        }
      }
    }
  }

`
const Header = ({ siteTitle }) => (
  <div id="content">
    <Topbar>
      {/* <!-- Topbar --> */}
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

        {/* <!-- Sidebar Toggle (Topbar) --> */}
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars" />
        </button>

        {/* <!-- Topbar Search --> */}
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm" />
              </button>
            </div>
          </div>
        </form>

        {/* <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">

          {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
          <li className="nav-item dropdown no-arrow d-sm-none">
            <a className="nav-link dropdown-toggle" href="#f" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-search fa-fw" />
            </a>
            {/* <!-- Dropdown - Messages --> */}
            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
              <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                  <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          {/* <!-- Nav Item - Alerts --> */}
          <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="#f" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-bell fa-fw" />
              {/* <!-- Counter - Alerts --> */}
              <span className="badge badge-danger badge-counter">3+</span>
            </a>
            {/* <!-- Dropdown - Alerts --> */}
            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
              <h6 className="dropdown-header">
                Alerts Center
              </h6>
              <a className="dropdown-item d-flex align-items-center" href="#f">
                <div className="mr-3">
                  <div className="icon-circle bg-primary">
                    <i className="fas fa-file-alt text-white" />
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 12, 2019</div>
                  <span className="font-weight-bold">A new monthly report is ready to download!</span>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#f">
                <div className="mr-3">
                  <div className="icon-circle bg-success">
                    <i className="fas fa-donate text-white" />
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 7, 2019</div>
                  $290.29 has been deposited into your account!
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#f">
                <div className="mr-3">
                  <div className="icon-circle bg-warning">
                    <i className="fas fa-exclamation-triangle text-white" />
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 2, 2019</div>
                  Spending Alert: We&apos;ve noticed unusually high spending for your account.
                </div>
              </a>
              <a className="dropdown-item text-center small text-gray-500" href="#f">Show All Alerts</a>
            </div>
          </li>

          {/* <!-- Nav Item - Messages --> */}
          <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="#f" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-envelope fa-fw" />
              {/* <!-- Counter - Messages --> */}
              <span className="badge badge-danger badge-counter">7</span>
            </a>
            {/* <!-- Dropdown - Messages --> */}
            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
              <h6 className="dropdown-header">
                Message Center
              </h6>
              <a className="dropdown-item d-flex align-items-center" href="#f">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" alt="" />
                  <div className="status-indicator bg-success" />
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">Hi there! I am wondering if you can help me with a problem I&apos;ve been having.</div>
                  <div className="small text-gray-500">Emily Fowler · 58m</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#f">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="https://source.unsplash.com/AU4VPcFN4LE/60x60" alt="" />
                  <div className="status-indicator" />
                </div>
                <div>
                  <div className="text-truncate">I have the photos that you ordered last month, how would you like them sent to you?</div>
                  <div className="small text-gray-500">Jae Chun · 1d</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#f">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="https://source.unsplash.com/CS2uCrpNzJY/60x60" alt="" />
                  <div className="status-indicator bg-warning" />
                </div>
                <div>
                  <div className="text-truncate">Last month&apos;s report looks great, I am very happy with the progress so far, keep up the good work!</div>
                  <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#f">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="" />
                  <div className="status-indicator bg-success" />
                </div>
                <div>
                  <div className="text-truncate">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren&apos;t good...</div>
                  <div className="small text-gray-500">Chicken the Dog · 2w</div>
                </div>
              </a>
              <a className="dropdown-item text-center small text-gray-500" href="#f">Read More Messages</a>
            </div>
          </li>

          <div className="topbar-divider d-none d-sm-block" />

          {/* <!-- Nav Item - User Information --> */}
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="#f" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
              <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt="" />
            </a>
            {/* <!-- Dropdown - User Information --> */}
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
              <a className="dropdown-item" href="#f">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                Profile
              </a>
              <a className="dropdown-item" href="#f">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                Settings
              </a>
              <a className="dropdown-item" href="#f">
                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                Activity Log
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#fs" data-toggle="modal" data-target="#logoutModal">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                Logout
              </a>
            </div>
          </li>

        </ul>

      </nav>
      {/* <!-- End of Topbar --> */}

      {/* <!-- Begin Page Content --> */}

      {/* <!-- /.container-fluid --> */}
    </Topbar>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
