import { test, expect } from '@playwright/test';
import { PokemonFormPage } from './pokemon-form.page';


test.describe('PokemonForm', () => {
  let sut: PokemonFormPage;

  test.beforeEach(async ({page}) => {
    sut = new PokemonFormPage(page);
    await sut.navigateTo();
  })

  test('has title', async () => {
    // Expect a title "to contain" a substring.
    expect(await sut.getTitle()).toBe('PokemonListIs2024');
  });
  
  test('form is enabled', async () => {
    // arrange
    await expect(sut.form.submitButton).toBeDisabled();

    // act
    await sut.form.fill('floatzel', 'hydro pump', 20);

    // assert
    await expect(sut.form.nameInput).toHaveValue('floatzel');
    await expect(sut.form.typeInput).toHaveValue('water');
    await expect(sut.form.attackInput).toHaveValue('hydro pump');
    await expect(sut.form.levelInput).toHaveValue('20');

    await expect(sut.form.submitButton).toBeEnabled();
  });  
})
