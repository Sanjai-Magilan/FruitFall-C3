const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.Bullet,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Touch.Cnds.OnHoldGestureObject
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{"8Direction": 0},
	{Sprite2: 0},
	{Bullet: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Score: 0},
	{Missed: 0},
	{Sprite5: 0},
	{Touch: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Score: class extends self.ITextInstance {},
	Missed: class extends self.ITextInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {}
}