export const actions = {
	default: async ({ request }) => {
		const { email, password } = Object.fromEntries(await request.formData());

		return { success: true };
	}
};
