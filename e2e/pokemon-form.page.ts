import { Page } from "@playwright/test";
import { PageObject } from "./page-object";

export class PokemonFormPage {

    constructor(private page: Page) { }

    async navigateTo() {
        await this.page.goto('/pokemon');
    }

    async getTitle() {
        return await this.page.title();
    }

    public form = new PokemonForm(this.page.locator('app-pokemon-form'));
}

class PokemonForm extends PageObject {
    public nameInput = this.host.locator('#pokemonNameInput');
    public typeInput = this.host.locator('#pokemonTypeInput');
    public attackInput = this.host.locator('#pokemonAttackInput');
    public levelInput = this.host.locator('#pokemonLevelInput');
    public submitButton = this.host.locator('form > button').nth(0);

    async fill(name: string, attack: string, level: number) {
        await this.nameInput.fill(name);
        await this.attackInput.fill(attack);
        await this.levelInput.fill(level + '');
    }
}