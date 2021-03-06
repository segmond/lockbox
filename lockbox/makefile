# Edit these to match your environment.
LIBRARY_ROOT=../closure-library
COMPILER_JAR=../closure-compiler/compiler.jar
# PREFIX is relative to $(LIBRARY_ROOT)/closure
PREFIX=../../../lockbox
COMPILER_FLAGS=--compilation_level=ADVANCED_OPTIMIZATIONS --warning_level=VERBOSE --externs=$(EXTERNS)

# Don't touch these unless you're modifying the source.
MODULES=ga app gf28 ssss comb message rng
EXTERNS=externs.js

# You should almost never have any reason to touch anything below this line. ###

PYTHON=python2
CLOSURE_BUILD=$(LIBRARY_ROOT)/closure/bin/build
CLOSUREBUILDER=$(PYTHON) $(CLOSURE_BUILD)/closurebuilder.py
DEPSWRITER=$(PYTHON) $(CLOSURE_BUILD)/depswriter.py
JS=$(foreach mod, $(MODULES), $(mod).js)
JSOUT=$(foreach mod, $(MODULES), $(mod)-compiled.js)
JSEXTRA=alltests.js deps.js

all: $(JSOUT) $(JSEXTRA)

%-compiled.js: %.js externs.js
	$(CLOSUREBUILDER) --root=$(LIBRARY_ROOT) --root=. --namespace=$* \
		--output_mode=compiled --compiler_jar=$(COMPILER_JAR) \
		$(foreach flag,$(COMPILER_FLAGS),--compiler_flag=$(flag)) > $@

alltests.js: *_test.html
	echo 'var _allTests = [' >$@
	ls |grep '_test\.html$$' | sed 's/^\(.*\)$$/"\1"/' | \
		tr '\n' ',' | sed 's/.$$//' >>$@
	echo '];' >>$@

deps.js: $(JS)
	$(DEPSWRITER) --root_with_prefix='. $(PREFIX)' > $@

app-compiled.js: ga.js ssss.js message.js
ssss-compiled.js: comb.js gf28.js rng.js

clean:
	-rm $(JSOUT)

distclean: clean
	-rm $(JSEXTRA)

.PHONY: all clean distclean
