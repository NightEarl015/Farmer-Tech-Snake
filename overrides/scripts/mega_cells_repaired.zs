<recipetype:create:compacting>.addRecipe("mega_cells_repaired_1", <constant:create:heat_condition:superheated>, [<item:megacells:radioactive_cell_component>], [<item:ae2:cell_component_256k>, <item:mekanism:radioactive_waste_barrel>, <item:ae2:singularity>]);
<recipetype:create:compacting>.addRecipe("mega_cells_repaired_2", <constant:create:heat_condition:superheated>, [<item:megacells:bulk_cell_component>], [<item:megacells:cell_component_1m>, <item:ae2:spatial_cell_component_2>, <item:ae2:singularity>]);
craftingTable.remove(<item:ae2things:advanced_inscriber>);
<recipetype:ae2:inscriber>.removeAll();
import mods.jeitweaker.Jei;
Jei.hideIngredient(<item:ae2:inscriber>);
Jei.hideIngredient(<item:ae2things:advanced_inscriber>);