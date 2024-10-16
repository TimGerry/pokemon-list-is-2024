import { test, expect } from '@playwright/test';


test.describe('PokemonForm', () => {
  test('has title', async ({ page }) => {
    await page.goto('');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/PokemonListIs2024/);
  });
  
  test('form is enabled', async ({ page}) => {
    // arrange
    await page.goto('/');

    const nameInput = page.locator('#pokemonNameInput');
    const typeInput = page.locator('#pokemonTypeInput');
    const attackInput = page.locator('#pokemonAttackInput');
    const levelInput = page.locator('#pokemonLevelInput');

    const submitButton = page.locator('app-pokemon-form > form > button').nth(0);
    await expect(submitButton).toBeDisabled();

    // act
    await nameInput.fill('floatzel');
    await attackInput.fill('hydro pump');
    await levelInput.fill('20');

    // assert
    await expect(nameInput).toHaveValue('floatzel');
    await expect(typeInput).toHaveValue('water');
    await expect(attackInput).toHaveValue('hydro pump');
    await expect(levelInput).toHaveValue('20');

    await expect(submitButton).toBeEnabled();
  });  
})
