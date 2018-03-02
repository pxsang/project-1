import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon, Text } from 'native-base';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

import RecipesContainer from '../../containers/Recipes';
import RecipesComponent from '../components/Recipes';
import RecipeViewComponent from '../components/Recipe';
import MixiGamingViewComponent from '../components/MixiGaming';
import FFQGamingViewComponent from '../components/FFQGaming';
import GigabyteMarinesViewComponent from '../components/GigabyteMarines';
import BookedViewComponent from '../components/Booked';
import DeckSwiperViewComponent from '../components/DeckSwiper';

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/ForgotPassword';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/UpdateProfile';

import MemberContainer from '../../containers/Member';
import ProfileComponent from '../components/Profile';

import AboutComponent from '../components/About';

const Index = (
	<Stack>
		<Scene hideNavBar>
			<Tabs key="tabbar" swipeEnabled type="replace" showLabel={false} {...DefaultProps.tabProps}>
				<Stack
					key="home"
					title={AppConfig.appName.toUpperCase()}
					icon={() => <Icon name="planet" {...DefaultProps.icons} />}
					{...DefaultProps.navbarProps}
				>
					<Scene key="home" component={GigabyteMarinesViewComponent} />
				</Stack>

				<Stack
					key="recipes"
					title="RECIPES"
					icon={() => <Icon name="book" {...DefaultProps.icons} />}
					{...DefaultProps.navbarProps}
				>
					<Scene key="recipes" component={RecipesContainer} Layout={RecipesComponent} />
				</Stack>

				<Stack
					key="profile"
					title="PROFILE"
					icon={() => <Icon name="contact" {...DefaultProps.icons} />}
					{...DefaultProps.navbarProps}
				>
					<Scene key="profileHome" component={MemberContainer} Layout={ProfileComponent} />
					<Scene
						back
						key="signUp"
						title="SIGN UP"
						{...DefaultProps.navbarProps}
						component={SignUpContainer}
						Layout={SignUpComponent}
					/>
					<Scene
						back
						key="login"
						title="LOGIN"
						{...DefaultProps.navbarProps}
						component={LoginContainer}
						Layout={LoginComponent}
					/>
					<Scene
						back
						key="forgotPassword"
						title="FORGOT PASSWORD"
						{...DefaultProps.navbarProps}
						component={ForgotPasswordContainer}
						Layout={ForgotPasswordComponent}
					/>
					<Scene
						back
						key="updateProfile"
						title="UPDATE PROFILE"
						{...DefaultProps.navbarProps}
						component={UpdateProfileContainer}
						Layout={UpdateProfileComponent}
					/>
				</Stack>
			</Tabs>
		</Scene>

		<Scene
			back
			clone
			key="recipe"
			title="RECIPE"
			{...DefaultProps.navbarProps}
			component={RecipesContainer}
			Layout={RecipeViewComponent}
		/>
		<Scene
			back
			clone
			key="mixigaming"
			title="MIXI GAMING"
			{...DefaultProps.navbarProps}
			component={MixiGamingViewComponent}
			// renderRightButton={() => <Text>asds</Text>}
		/>
		<Scene
			back
			clone
			key="ffqgaming"
			title="FFQ GAMING"
			{...DefaultProps.navbarProps}
			component={FFQGamingViewComponent}
		/>
		<Scene
			back
			clone
			key="deckswiper"
			title="Deck Swiper"
			{...DefaultProps.navbarProps}
			component={DeckSwiperViewComponent}
		/>
		<Scene
			back
			clone
			key="gigabytemarines"
			title="Gigabyte Marines"
			{...DefaultProps.navbarProps}
			component={GigabyteMarinesViewComponent}
		/>
		<Scene
			back
			clone
			key="booked"
			title="Booked"
			{...DefaultProps.navbarProps}
			component={BookedViewComponent}
		/>
	</Stack>
);

export default Index;
