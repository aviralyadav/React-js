// @flow
import React from 'react';
import type { Element } from 'react';
import classnames from 'classnames';
import { Button, Menu, MenuItem, Toolbar, withStyles, JssClasses } from '@material-ui/core';
import MenuDownIcon from 'mdi-react/MenuDownIcon';
import AccountCircleIcon from 'mdi-react/AccountCircleIcon';
// import MenuIcon from 'mdi-react/MenuIcon';
import MenuIcon from '@material-ui/icons/Menu';
// import { Avatar, AvatarSizes, DynamicText, responsive } from '../';
// import { FlexSpacer } from '../FlexSpacer';
// import type { JssClasses } from '../types';

type ExternalProps = {
  accountIconWhenSmall?: boolean,
  actionIcons?: Object[],
  e2e: string,
  userFullName?: string,
  userInitials?: string,
  onMenuButtonClick?: (expanded: boolean) => void,
  titleLogos?: Object[],
  userMenuItems?: Element<MenuItem>[],
};

type InternalProps = {
  queries: Object,
  classes: JssClasses,
  theme: Object,
};

export type AppBarCompProps = ExternalProps & InternalProps;

type State = {
  open: boolean,
  anchorEl: any,
};

class AppBarComp extends React.Component<AppBarCompProps, State> {
  state = {
    open: false,
    anchorEl: null,
  };

  onMenuChange = () => {
    this.closePopover();
  };

  openPopover = (event: any) => {
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  closePopover = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const {
      userFullName,
      userInitials,
      userMenuItems,
      queries,
      accountIconWhenSmall,
      titleLogos,
      actionIcons,
      classes,
      onMenuButtonClick,
      e2e,
    } = this.props;
    return (
      <Toolbar className={classes.container}>
        {queries.isSmall && (
          <Button
            onClick={onMenuButtonClick}
            classes={{ root: classnames(classes.button, classes.menuButton) }}
            data-e2e={`${e2e}-menuButton`}
          >
            <MenuIcon />
          </Button>
        )}
        {titleLogos &&
          titleLogos.map((titleLogoObject) => {
            const titleLogo = queries.isGreaterThanSmall
              ? titleLogoObject.large
              : titleLogoObject.small || titleLogoObject.large;
            return (
              <div key={titleLogoObject.key} className={classes.titleIcon}>
                {titleLogo}
              </div>
            );
          })}

        <FlexSpacer />

        {actionIcons &&
          actionIcons.map((actionIcon) => {
            const actionIconLogo = actionIcon.logo
              ? React.cloneElement(actionIcon.logo, { size: '20' })
              : actionIcon.logo;
            return (
              <div
                key={actionIcon.key}
                data-e2e={`${e2e}-actionIcon`}
                className={classes.actionIconsContainer}
              >
                <Button
                  classes={{ root: classes.button }}
                  onClick={actionIcon.onClick}
                >
                  {actionIconLogo}
                </Button>
              </div>
            );
          })}
        {queries.isSmall && accountIconWhenSmall ? (
          <Button
            onClick={this.openPopover}
            classes={{ root: classes.button }}
            data-e2e={`${e2e}-accountCircleIcon`}
          >
            <AccountCircleIcon />
          </Button>
        ) : (
          userFullName && (
            <Button
              onClick={this.openPopover}
              classes={{ root: classes.button }}
              data-e2e={`${e2e}-userMenuButton`}
            >
              <div className={classes.userMenu}>
                <div>
                  <Avatar initials={userInitials} size={AvatarSizes.Small} />
                </div>
                <div className={classes.nameContainer}>
                  <DynamicText>{userFullName}</DynamicText>
                </div>
                <div className={classes.menuIconContainer}>
                  <MenuDownIcon className={classes.menuIcon} />
                </div>
              </div>
            </Button>
          )
        )}
        <Menu
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onClick={this.onMenuChange}
          data-e2e={`${e2e}-userMenu`}
          onClose={this.closePopover}
        >
          {userMenuItems}
        </Menu>
      </Toolbar>
    );
  }
}

const styles = (theme: Object) => {
  return {
    container: {
      backgroundColor: `${theme.colors.black}`,
      color: `${theme.colors.white}`,
      padding: 0,
      height: theme.spacing.topNavHeight,
    },
    menuIcon: {
      width: 20,
    },
    menuIconContainer: {
      display: 'flex',
      alignItems: 'center',
      margin: '0 -5px',
    },
    nameContainer: {
      fontSize: 13,
      whiteSpace: 'nowrap',
      margin: '0 5px 0 10px',
    },
    leftGroup: {
      marginRight: 'auto',
    },
    button: {
      color: 'inherit',
      minWidth: 'auto',
      borderRadius: '0',
      height: '100%',
      padding: '0 10px',
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: `${theme.colors.neutralA500}`,
      },
    },
    menuButton: {
      marginRight: '-7px',
    },
    userMenu: {
      display: 'flex',
      alignItems: 'center',
    },
    titleIcon: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 10px 0 10px',
      height: '24px',
      borderLeft: `1px solid ${theme.colors.neutral700}`,
      '&:first-child': {
        borderLeft: 'none',
      },
    },
    actionIconSeparator: {
      borderRight: `1px solid ${theme.colors.neutral900}`,
      '&:first-child': {
        borderLeft: `1px solid ${theme.colors.neutral900}`,
      },
    },
    actionIconsContainer: {
      height: '100%',
    },
  };
};

const breakpoints = {
  small: {
    min: 0,
    max: 768,
  },
  large: {
    min: 1441,
    max: 9999,
  },
};

export const AppBar = withStyles(styles, { withTheme: true })(
  responsive(breakpoints)(AppBarComp)
);

export const testPort = {
  AppBarComp,
};
