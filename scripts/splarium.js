const PlastaniumSummon = new Effect(10, e => {
    Draw.color(Color.valueOf("cbd97f"),);
	Lines.stroke(e.fslope() * 2);
	Lines.poly(e.x, e.y, 4, 4 + e.finpow() * 8);
});
const turret = extendContent(ItemTurret, "splarium", {});

turret.shootEffect = PlastaniumSummon;