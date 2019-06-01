import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';
import { ProfileState, ProfileInterface, RootState } from '../../types';

const profileDefault: ProfileInterface = {
	firstname: 'Rinat',
	lastname: 'Davlikamov',
	nickname: 'supervueman',
	age: 28,
	avatar: 'avatar.jpg',
	email: ''
};

const state: ProfileState = {
	profile: {
		firstname: '',
		lastname: '',
		nickname: '',
		age: 28,
		avatar: '',
		email: ''
	}
};

const mutations: MutationTree<ProfileState> = {
	setProfile(state, payload) {
		state.profile = payload;
	}
};

const actions: ActionTree<ProfileState, RootState> = {
	async fetchProfile({ commit }) {
		commit('setProfile', profileDefault);
	}
};

const getters: GetterTree<ProfileState, RootState> = {
	getProfile(state) {
		return state.profile;
	}
};

export const profile: Module<ProfileState, RootState> = {
	state,
	getters,
	actions,
	mutations,
	namespaced: true
};
